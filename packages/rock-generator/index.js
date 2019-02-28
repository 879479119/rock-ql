exports.walk = (node, depth) => {
  const type = node.type;

  const entries = {
    SELECT: {
      generate: n => {
        return `SELECT ${n.selectList.map(walk)} FROM ${walk(n.source)}`;
      }
    },
    COUNT: {
      generate: n => {
        return "COUNT ";
      }
    },
    SOURCE_LIST: {
      generate: n => {
        return `${n.source.map(t => `ID ${t.id}`).join(",")} ${walk(
          n.filters
        )}`;
      }
    },
    WHERE: {
      generate: n => {
        if (n.conditions === null) {
          return "NULL";
        }
        return `WHERE ${walk(n.conditions, 1)}`;
      }
    },
    FILTER_AND: {
      generate: (n, depth) => {
        if (depth === 1) {
          return `${n.list.map(n => walk(n)).join(" \nAND ")}`;
        }
        return `(\n ${n.list.map(n => walk(n)).join(" \nAND ")} )`;
      }
    },
    FILTER_OR: {
      generate: (n, depth) => {
        if (depth === 1) {
          return `${n.list.map(n => walk(n)).join(" \nOR ")}`;
        }
        return `(\n ${n.list.map(n => walk(n)).join(" \nOR ")} )`;
      }
    },
    FILTER_NODE: {
      generate: (n, depth) => {
        if (n.range) {
          return `${walk(n.action)} ${walk(n.range)}`;
        }
        if (n.action) {
          return `${walk(n.action)}`;
        }
      }
    },
    USER_ACTION: {
      generate: (n, depth) => {
        return `USER DO ${walk(n.detail.action)} TO ${walk(n.detail.target)}`;
      }
    },
    TOPIC_ACTION: {
      generate: (n, depth) => {
        return `TOPIC DO ${walk(n.detail.action)} TO ${walk(n.detail.target)}`;
      }
    },
    ID_NODE: {
      generate: n => {
        if (n.comment) {
          return `ID ${n.id} COMMENT \`${n.comment}\``;
        }
        return `ID ${n.id}`;
      }
    },
    RANGE: {
      generate: n => {
        return `RANGE ${walk(n.from)} UNTIL ${walk(n.to)}`;
      }
    },
    TIMESTAMP: {
      generate: n => {
        return n.value;
      }
    },
    DATE: {
      generate: n => {
        return "`" + n.value + "`";
      }
    }
  };

  if (!entries[type]) {
    console.info(type, entries[type]);
    throw Error(type);
  }

  return entries[type].generate(node, depth);
};

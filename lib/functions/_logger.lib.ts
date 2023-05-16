
const type='log'||'error'||"waring"

const logger = (() => {
  const checkIfLogsEnabled = () => {
    if (process?.browser) {
      const search = global?.window?.location?.search;
      const enabled =
        search && new URLSearchParams(search).get("debug") === "true";

      (global as any).areLogsEnabled = enabled || false;
      return (global as any).areLogsEnabled;
    }

    return false;
  };

  const isDev = process.env.NODE_ENV !== "production";

  const print = (type: any, ...messages: any[]) => {
    if ((global as any).areLogsEnabled === "undefined") {
      checkIfLogsEnabled();
    }

    if ((global as any).areLogsEnabled || isDev) {
      switch (type) {
        case "log":
          console.log(
            "%c Log:",
            "background: blue; color: white;",
            ...messages
          );
          break;
        case "warn":
          console.warn(
            "%c Warning:",
            "background: orange; color: white;",
            ...messages
          );
          break;
        case "error":
          console.error(
            "%c Error:",
            "background: red; color: white;",
            ...messages
          );
          break;
        case "trace":
          console.trace(
            "%c Log:",
            "background: grey; color: black;",
            ...messages
          );
          break;
        case "debug":
        default:
          console.log(
            "%c Log:",
            "background: green; color: white;",
            ...messages
          );
      }
    }
  };

  return {
    debug: print.bind(null, "debug"),
    log: print.bind(null, "log"),
    warn: print.bind(null, "warn"),
    error: print.bind(null, "error"),
    trace: print.bind(null, "trace")
  };
})();

export default logger;

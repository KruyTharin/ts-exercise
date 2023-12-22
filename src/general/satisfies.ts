type Connection = {};

declare function createConnection(
  host: string,
  port: string,
  reconnection: boolean,
  poolSize: number
): Connection;

type Config = {
  host: string;
  port: string | number;
  tryReconnection: boolean | (() => boolean);
  poolSize?: number;
};

const config = {
  host: "localhost",
  port: 8080,
  tryReconnection: () => true,
} satisfies Config;

function start() {
  let { host, port, tryReconnection } = config;
  createConnection(host, `${port}`, tryReconnection(), 10);
}

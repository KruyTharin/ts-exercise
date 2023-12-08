// use const and union type instead of enums

// enum
enum LogLevel {
  DEBUG = "DEBUG",
  WARNING = "WARNING",
  ERROR = "ERROR",
}

// const
const logLevel = ["DEBUG", "WARNING", "ERROR"] as const;

// type
type LogLevelType = "DEBUG" | "WARNING" | "ERROR";

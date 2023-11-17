export class Log {
    static success(msg: string) {
      console.log(`%c ${msg}`, "color: green; font-weight: bold");
    }
  
    static error(msg: string) {
      console.log(`%c ${msg}`, "color: red; font-weight: bold");
    }
  
    static info(msg: string) {
      console.log(`%c ${msg}`, "color: blue; font-weight: bold");
    }
  }
  
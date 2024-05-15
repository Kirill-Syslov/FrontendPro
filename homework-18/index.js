// Реалізувати таймер відліку:

// Початок таймера визначати із змінної
// Відобразити на сторінці час у форматі 01:25
// Коли закінчився таймер зупинити його


class Timer {
    constructor(time) {
      this.initialTime = Number(time); 
      this.time = this.initialTime;
      this.element = document.querySelector(".timer");
      this.element.innerHTML = this.formatTime(this.time);
    }
  
    start() {
      this.intervalId = setInterval(() => {
        if (this.time <= 0) {
          clearInterval(this.intervalId);
          return;
        }
        this.time--;
        this.element.innerHTML = this.formatTime(this.time);
      }, 1000);
    }
  
    stop() {
      clearInterval(this.intervalId);
    }
  
    reset() {
      clearInterval(this.intervalId);
      this.time = this.initialTime; 
      this.element.innerHTML = this.formatTime(this.time);
    }
  
    formatTime(time) {
      const minutes = Math.floor(time / 60).toString().padStart(2, "0");
      const seconds = (time % 60).toString().padStart(2, "0");
      return `${minutes}:${seconds}`;
    }
  }
  
  const myTimer = new Timer(100);
  document.querySelector(".start").addEventListener("click", () => myTimer.start());
  document.querySelector(".stop").addEventListener("click", () => myTimer.stop());
  document.querySelector(".reset").addEventListener("click", () => myTimer.reset());
  

  
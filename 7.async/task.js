class AlarmClock{
    constructor(){
        this.alarmCollection = []
        this.intervalId
    }

    addClock(time, callback, id) {
        if (!id) {
          throw new Error('Параметр id не передан');
        } else if (this.alarmCollection.find(call => call.id === id)) {
          return console.error('Звонок с таким id существует');
        }
    
        return this.alarmCollection.push({ time, callback, id });
      }
}


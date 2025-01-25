/**
 * Single Responsibility Principle. "Одно поручение. Всего одно" - Локи "Тор: Рагнарёк"
 * Each class has to solve only one problem. And have only one reason to change
 */

/**
 * If the code violates this principle - the code becomes tightly coupled. It becomes difficult to modify and support.
 * #Tightly Coupled means - if you need to change something in one place you will need to change something else in another place
 * src\OOP\something.ts (see #1)
 */

/** <-- Bad example --> */
interface IRecord {
  data: {
    name: string;
  };
  duration: number;
}

interface IFormattedRecord extends IRecord {
  format: string;
}

class Recorder_ {
  startRecording() {
    /**
     * Some logic here...
     */
  }

  stopRecording(name: string): IRecord {
    /**
     * Some logic here...
     */
    return { data: { name }, duration: Math.random() * 100 };
  }

  getAVI(video: IRecord): IFormattedRecord {
    /**
     * Some logic here
     */
    return { ...video, format: "avi" };
  }

  getMOV(video: IRecord): IFormattedRecord {
    /**
     * Some logic here
     */
    return { ...video, format: "mov" };
  }

  getMP4(video: IRecord): IFormattedRecord {
    /**
     * Some logic here
     */
    return { ...video, format: "mp4" };
  }
}

const recorder_Service = new Recorder_();
recorder_Service.startRecording();
/** shooting... */
const myVideo_Raw = recorder_Service.stopRecording("My_first_video");
const myVideo_AVI = recorder_Service.getAVI(myVideo_Raw);
const myVideo_MOV = recorder_Service.getMOV(myVideo_Raw);
const myVideo_MP4 = recorder_Service.getMP4(myVideo_Raw);
/** <-- Bad example --/> */

/** <-- Good example --> */
interface IRecord {
  data: {
    name: string;
  };
  duration: number;
}

interface IFormattedRecord extends IRecord {
  format: string;
}

class Recorder {
  startRecording() {
    /**
     * Some logic here...
     */
  }
  stopRecording(name: string): IRecord {
    /**
     * Some logic here...
     */
    return { data: { name }, duration: Math.random() * 100 };
  }
}

class Formatter {
  getAVI(video: IRecord): IFormattedRecord {
    /**
     * Some logic here
     */
    return { ...video, format: "avi" };
  }

  getMOV(video: IRecord): IFormattedRecord {
    /**
     * Some logic here
     */
    return { ...video, format: "mov" };
  }

  getMP4(video: IRecord): IFormattedRecord {
    /**
     * Some logic here
     */
    return { ...video, format: "mp4" };
  }
}

const recorderService = new Recorder();
recorderService.startRecording();
/** shooting... */
const myVideoRaw = recorderService.stopRecording("My_first_video");
const formatterService = new Formatter();
const myVideoAVI = formatterService.getAVI(myVideoRaw);
const myVideoMOV = formatterService.getMOV(myVideoRaw);
const myVideoMP4 = formatterService.getMP4(myVideoRaw);
/** <-- Good example --/> */

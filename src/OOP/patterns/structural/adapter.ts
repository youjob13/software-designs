/**
 * The Adapter Pattern is a structural design pattern that allows objects with incompatible interfaces to collaborate.
 */

interface AppPlayer {
  play(song?: string): void;
  stop(): void;
  volUp(): void;
  volDown(): void;
}

class MyAppPlayer implements AppPlayer {
  private currentSong: string | undefined;
  private isPlaying = false;
  private volume = 50;

  play(song?: string): void {
    this.currentSong = song ?? this.currentSong;
    if (this.currentSong == null) {
      throw new Error("Please provide any song");
    }
    this.isPlaying = true;
    console.log(`${this.currentSong} has been started`);
  }

  stop(): void {
    this.isPlaying = false;
    console.log(`${this.currentSong} has been stopped`);
  }

  volDown(): void {
    if (this.volume == 0) {
      console.log(`Volume is on min level: ${this.volume}`);
      return;
    }

    this.volume -= 10;
    console.log(`Volume level: ${this.volume}`);
  }
  volUp(): void {
    if (this.volume == 100) {
      console.log(`Volume is on max level: ${this.volume}`);
      return;
    }

    this.volume += 10;
    console.log(`Volume level: ${this.volume}`);
  }
}

class MyApp {
  constructor(private player: AppPlayer) {}

  start() {
    this.player.play("Rammstein / Rosenrot");
    this.player.volUp();
    this.player.volUp();
    this.player.volDown();
    setTimeout(() => this.player.stop(), 2000);
  }
}

class ThirdPartyPlayer {
  private song: string | undefined;
  private isTurnedOn = false;
  private volume = 50;

  playSong(song: string) {
    this.song = song;
    this.isTurnedOn = true;
    console.log("The player has been started.", `Current song is ${this.song}`);
  }

  stopSong() {
    this.isTurnedOn = false;
    console.log("The player has been stopped.", `Current song is ${this.song}`);
  }

  volumeUp(value: number) {
    this.volume += value;
    console.log(
      "The volume has been increased.",
      `Current volume is ${this.volume}`
    );
  }

  volumeDown(value: number) {
    this.volume -= value;
    console.log(
      "The volume has been decreased.",
      `Current volume is ${this.volume}`
    );
  }

  getStatus() {
    return this.isTurnedOn;
  }

  getCurrentVolume() {
    return this.volume;
  }
}

class ThirdPartyPlayerAdapter implements AppPlayer {
  private thirdPartyPlayer = new ThirdPartyPlayer();
  private isPlaying = false;

  play(song?: string): void {
    if (song == null) {
      throw new Error("Please provide any song");
    }
    this.thirdPartyPlayer.playSong(song);
    this.isPlaying = this.thirdPartyPlayer.getStatus();
  }

  stop(): void {
    this.thirdPartyPlayer.stopSong();
    this.isPlaying = this.thirdPartyPlayer.getStatus();
  }

  volDown(): void {
    if (this.thirdPartyPlayer.getCurrentVolume() == 0) {
      return;
    }

    this.thirdPartyPlayer.volumeDown(10);
  }
  volUp(): void {
    if (this.thirdPartyPlayer.getCurrentVolume() == 100) {
      return;
    }

    this.thirdPartyPlayer.volumeUp(10);
  }
}

const myPlayer = new MyAppPlayer();
new MyApp(myPlayer).start();

// In case we have a third-party player that doesn't match our interface.
// We can apply Adapter pattern.

const thirdPartyPlayerWithAdapter = new ThirdPartyPlayerAdapter();
new MyApp(thirdPartyPlayerWithAdapter).start();

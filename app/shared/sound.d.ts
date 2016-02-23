export declare class Sound {
    protected path: string;
    protected player: any;
    constructor(path: string);
    play(): void;
    pause(): void;
    stop(): void;
    isPlaying(): boolean;
    seekTo(milliseconds: number): void;
    release(): void;
    getDuration(): number;
    getCurrentPosition(): number;
    setRate(rate: number): number;
    getRate(): number;
}

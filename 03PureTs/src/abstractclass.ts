 abstract class TakePhoto{
    constructor(
     public cameraMode:string,
     public filter: string
) {}
    abstract getSepia():void
    getReelTime():number{
    console.log("sepia");
    return 8

    }

    }

class Instagram extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("sepia")
    }
}
    

const ak = new Instagram("test", "Test", 2)

ak.getReelTime()
abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
    ) { }

    abstract getSomething(): void //abstract method doesn't have any definition

    getReelTime(): number{
        return 8;
    }
}

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSomething(): void {
        console.log("Something")
    }
}


// const km = new TakePhoto("test", "Test")


// class Instagram extends 
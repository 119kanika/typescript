interface TakePhoto{
    cameraMode: string
    filter: string
    burstMode: number 
}

class Instagram implements TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstMode: number
    ){}
}

interface Story {
    createStory(): string 
}

class Youtube implements TakePhoto, Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstMode: number,
        public shorts: string
    ){}

    createStory(): string{
        return "Kanika"
    }
}




export {}
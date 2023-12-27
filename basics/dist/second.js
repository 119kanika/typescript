"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Instagram {
    constructor(cameraMode, filter, burstMode) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
    }
}
class Youtube {
    constructor(cameraMode, filter, burstMode, shorts) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
        this.shorts = shorts;
    }
    createStory() {
        return "Kanika";
    }
}

class Timer {
	constructor(sec, autoStart, secStep) {	
		this.sec = sec;
		this.autoStart = autoStart;
        this.secStep = secStep;
        this.render();
        this.checkAutoStart(); 
	}

	start() {
		this.interval = setInterval(this.update.bind(this), this.secStep*1000);	
	}

	stop() {
		clearInterval(this.interval);
	}

	update() {  
		this.sec > 0 ? this.sec -= this.secStep : this.stop();
        this.displayTime();	
        this.stepProgressBar(); 
        console.log(this.sec);   																																		 
    }
    

	displayTime() {
		const minutes = Math.floor(this.sec / 60);
		const seconds = this.sec % 60;
		this.blockTimer.innerText = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;	
	}

	render() { 
        let container = document.getElementById('container');
        
        container.classList.add("wrapper");
        this.blockTimer = document.createElement('div');
        this.blockTimer.classList.add('timerBlock');
        container.append(this.blockTimer);

        this.button = document.createElement('button');
        this.button.classList.add('btn');
        this.button.textContent = 'Start';
        container.append(this.button);

        container.append(this.createProgressBar());
        this.button.addEventListener('click', this.checkClick.bind(this));
        this.displayTime();	  
    }
    checkAutoStart() {
        if (this.autoStart === false) {
            this.button.textContent = "Stop";
            this.checkClick();
        }
        else {
            this.button.textContent = "Start";
            this.checkClick();
        }
    }

	checkClick() {
        if (this.button.textContent === "Start") {
            this.button.textContent = "Stop";
            this.start();
        }

        else {
            this.button.textContent = "Start";
            this.stop();
        }   
    }

    createProgressBar() {
        this.progressBar = document.createElement("div");
        this.progressBar.classList.add("progress-bar");
        return this.progressBar;
    }
  
    stepProgressBar() {
        const currentWidth = this.progressBar.offsetWidth;
        const step = currentWidth / this.sec;
        this.progressBar.style.width = (currentWidth - step) >= 0 ? `${currentWidth - step}px` : `${0}px`;                                                                                                                                                                                                 
    }
}


new Timer(10, false, 1);
new Timer(1000, true, 2);




 







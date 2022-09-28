import {defineStore} from 'pinia'

const getModeStorage = ():boolean => {
    let darkModeStorage: boolean;

    if(localStorage.getItem('darkModeStorage')) {
        darkModeStorage = JSON.parse(localStorage.getItem('darkModeStorage')!);
        darkModeStorage && window.document.documentElement.classList.add('dark');
    }
    else {
        darkModeStorage = false;
    }

    return darkModeStorage;
}

export const useModeStore = defineStore('mode', {
    state: () => ({
        darkMode : getModeStorage(),
    }),
    actions:  {
        toggleMode() {
            this.darkMode === true ? this.darkMode = false : this.darkMode = true;
        }
    }
})
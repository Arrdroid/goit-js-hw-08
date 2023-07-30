import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = new Vimeo(document.getElementById('vimeo-player'));
const STORAGE_KEY = 'videoplayer-current-time';

vimeoPlayer.on( 'timeupdate',
  throttle ( event => {
    localStorage.setItem(STORAGE_KEY, event.seconds);
  }, 1000)
);

vimeoPlayer.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);
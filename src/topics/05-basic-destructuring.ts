
interface audioplayer {
    audioVolume: number;
songDuration: number;
song: string;
details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: audioplayer = {
    audioVolume: 6,
    songDuration: 190,
    song: "La vida no la tienes comprada",
    details: {
        author: "C-Kan",
        year: 2014
    }
};

const {
    song, 
    details: {author}
} = audioPlayer

//console.log(`La cancion es: ${song}`);
//console.log(`El autor es: ${author}`);

const Dbz: string[] = ['Goku', 'Trunks','Vegetta','Manji Boo']


export {

}
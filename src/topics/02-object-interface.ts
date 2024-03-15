const skills: string[] = ['bash', 'counter',' Healing'];

interface Character{
    name: string,
    hp: number,
    skills: string[],
    homeTown?: string
}

const strider: Character = {
    name: 'FERCKO',
    hp: 5,
    skills: ['Bash', 'Counter']
}

strider.homeTown = 'China';

console.log(
    ' Nombre:' + strider.name + '\n',
    'Puntos vida: ' + strider.hp + '\n',
    'Skills: ' + strider.skills + '\n',
    'Lugar de procedencia' + strider.homeTown  + '\n');


export {

};
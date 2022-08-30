console.log("hello world")

interface DinosaurData {
    dinosaur: string;
    legs: number;
}

const data: DinosaurData[] = [
    {
        dinosaur: 'bigting',
        legs: 4
    },
    {
        dinosaur: 'littleting',
        legs: 2
    }
]

data.forEach(dino => {
    console.log(dino.legs)
})
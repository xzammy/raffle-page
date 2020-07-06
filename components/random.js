const names = [
    "person1",
    "person2",
    "person3",
    "person4",
    "person5",
    "person6",
    "person7",
    "person8",
    "person9",
    "person10",
];

const random = function() {
    return names[Math.floor((Math.random() * names.length))];
};

export { random };
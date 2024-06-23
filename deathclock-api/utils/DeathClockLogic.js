const calculateDeathPrediction = (dateOfBirth, lifestyle, genetics, healthCheck) => {
    const birthDate = new Date(dateOfBirth);
    const age = new Date().getFullYear() - birthDate.getFullYear();

    // Example logic to adjust predicted age based on factors
    let predictedAge = age + Math.floor(Math.random() * 50);

    if (lifestyle) {
        if (lifestyle.smoking) predictedAge -= 5;
        if (lifestyle.alcohol) predictedAge -= 3;
        if (lifestyle.exerciseLevel === 'high') predictedAge += 5;
    }

    if (genetics && genetics.familyHistory.includes('heart disease')) {
        predictedAge -= 5;
    }

    if (healthCheck) {
        if (healthCheck.bloodPressure === 'high') predictedAge -= 5;
        if (healthCheck.cholesterolLevel === 'high') predictedAge -= 5;
    }

    const causesOfDeath = [
        'Car Accident',
        'Stroke',
        'Alzheimer\'s Disease',
        'Suicide',
        'Choked on a pretzel',
        'Laughed to death at a joke',
        'Trampled by a stampede of squirrels',
        'Overdosed on chocolate',
        'Hit by a falling piano',
        'Lost in a maze and starved',
        'Swallowed by a giant fish',
        'Drowned in a bowl of soup',
        'Eaten by a T-Rex (time travel incident)',
        'Exploded from eating too many beans',
        'Tripped over own shoelaces',
        'Crushed by a stack of books',
        'Vanished into a black hole',
        'Fainted from seeing a ghost'
    ];

    const causeOfDeath = causesOfDeath[Math.floor(Math.random() * causesOfDeath.length)];

    return { predictedAge, causeOfDeath };
};

module.exports = { calculateDeathPrediction };

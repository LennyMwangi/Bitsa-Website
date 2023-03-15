import Typewriter from 'typewriter-effect';

const TypeEffect = () => {
    const strings = [
        'Networks and Communication Systems',
        'Software Engineering',
        'Business Information Technology',
    ];

    return (
        <Typewriter
            options={{
                autoStart: true,
                loop: true,
            }}
            onInit={(typewriter) => {
                typewriter
                    .typeString(strings[0])
                    .pauseFor(500)
                    .deleteAll()
                    .pauseFor(500)
                    .typeString(strings[1])
                    .pauseFor(500)
                    .deleteAll()
                    .pauseFor(500)
                    .typeString(strings[2])
                    .pauseFor(500)
                    .deleteAll()
                    .pauseFor(500)
                    .typeString(strings[3])
                    .pauseFor(500)
                    .deleteAll()
                    .pauseFor(500)
                    .start();
            }}
        />
    );
};

export default TypeEffect;
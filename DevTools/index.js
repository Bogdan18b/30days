    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
    const p = document.querySelector('p');

    function makeGreen() {
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('nothing new');

    // Interpolated
    console.log('nothing new except %s', '💩');

    // Styled
    console.log('%c nothing new except 💩', 'font-size:50px;color:blue');

    // warning!
    console.warn('oh NOOOOO');

    // Error :|
    console.error('WTF you did????');

    // Info
    console.info('Wes Bos is the best!!!');

    // Testing
    console.assert(1 === 1, 'sometimes');
    console.assert(1 === 2, 'could be'); // if condition is true nothing happers, else message is displayed as an error

    // clearing
    // console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    // Grouping together
    dogs.forEach(dog => {
      console.group(`${dog.name}`);  //groupCollapsed available
      console.log(`This is ${dog.name}.`);
      console.log(`He is ${dog.age}.`);
      console.log(`That is ${dog.age * 7} in dog years.`);
      console.groupEnd(`${dog.name}`);
    })

    // counting
    console.count('freaky');
    console.count('freaky');
    console.count('cool');
    console.count('cool');
    console.count('freaky');
    console.count('freaky');
    console.count('cool');
    console.count('freaky');

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/bogdan18b')
      .then(data => data.json())
      .then(data => {
        console.log(data);
        console.timeEnd('fetching data');
      });

      //table
      console.table(dogs);

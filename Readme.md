# Uber 2.0 clone with REACT NATIVE
  A copy of the Uber app to learn and improve coding skills with the React Native platform.

## What I have learned is how to use:

1. Tailwind CSS with RN for styling
2. React Redux for managing and centralizing application state
3. React Native Navigation to navigate between screens
4. React Native Elements as a styling library with pre-built components that build upon React Native components
5. Google Autocomplete as a feature in which an application predicts the rest of a word a user is typing
6. Google Directions API for real navigation
7. Google Distance Matrix API to calculate Travel time, Distance and Cost!
8. React Native Map components for iOS + Android
9. React Native Vector Icons a set of icons for buttons, logos and nav/tab bars

## Dependencies
  - Redux Toolkit [link](https://redux-toolkit.js.org/)
  - React Redux
  - Tailwind React Native Classnames
  - React Native Elements
  - React Native Vector Icons
  - React Native Safe Area Context
  - React Navigation Native
  - expo install react-native-screens react-native-safe-area-context
  - @react-navigation/native-stack
  - react-native-google-places-autocomplete
  - React Native Dotenv
  - React Native Maps
  - React Native Maps Directions


> The Distance Matrix API to get travel distance and time for a matrix of origins and destinations

```jsx
    const getTravelTime = async () => {
      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?
      units=imperial&origins=${origin.description}
      &destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`)
        .then((res) => res.json())
        .then(data => {
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
        })
    };
```

> In order to convert the price using ES6 

```jsx
  {new Intl.NumberFormat("en-gb", {
          style: "currency",
          currency: "USD"
        }).format((travelTimeInformation?.duration?.value * SURGE_CHANGE_RATE * multiplier) / 100)
  }
```

### Supported platform

- Android
- Ios
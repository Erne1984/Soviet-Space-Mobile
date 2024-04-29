import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  titleBox: {
    marginTop: 30,
    padding: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#ffd64a', 
  },
  subTitle: {
    textAlign: 'center',
    marginTop: 2,
    fontSize: 12,
    color: '#ffd64a', 
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnHome: {
    marginTop: 15,
    padding: 10,
    borderWidth: 3,
    borderColor: "#ffd64a",
  },
  btnHomeColor: {
    color: "#fff", 
    fontWeight: "bold"
  }
});

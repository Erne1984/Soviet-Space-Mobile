import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  containerDiscovery: {
    flex: 1,
  },
  containerBooks: {
    flexDirection: "row",
    flexWrap: 'wrap',  
    justifyContent: 'space-between',  
    paddingHorizontal: 10, 
    marginTop: 10,
  },
  rowBooks: {
    gap: 2,
    marginTop: 5,
    marginBottom: 30, 
  },
  bookName: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 5,
    marginTop: 5,
  }, 
  bookRead: {
    textAlign: "center",
    fontWeight: "bold"
  },
  modalContainer: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  modalContent: {
    alignItems: "center",
    width: 200,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 15,
  },
  modalButtonContainer: {
    flexDirection: "row",
    gap: 5,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
    justifyContent: 'center',
    alignItems: 'center',
  }
});

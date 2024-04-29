import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
      },
      illustreContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
      },
      illustreImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 20,
      },
      illustreInfo: {
        flex: 1,
        textAlign: "justify"
      },
      illustreName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      illustreDescription: {
        fontSize: 14,
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

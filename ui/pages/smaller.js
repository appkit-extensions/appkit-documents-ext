export default class SmallerDocumentsPage extends Component {

    constructor() {
      super();
      this.state = {
        documents: null
      }
    }
  
    moduleDidUpdate(newState) {
      this.setState({documents: newState.documents});
    }
  
      render() {
        
        if (!this.state.documents)
          return null;
      
        let tmb = this.state.documents[0].pdf.thumbnails[0];
        let height = 300;
        let width = height * tmb.width / tmb.height;
        let doc = this.state.documents[0];
      
          return (
            <Swiper style={styles.wrapper} width={310} height={400} showsButtons={true}>
          <View style={styles.item} key={key}>
                    <TouchableOpacity onPress={() => Module.openDocument(doc)}>
                        <Image source={{uri:tmb.path}} style={[{width:width,height:height}, styles.thumb]} resizeMode="cover" />
                        { doc.name === undefined || <Text style={styles.name}>{doc.name}</Text> }
                        { doc.description === undefined || <Text style={styles.description}>{doc.description}</Text> }
                    </TouchableOpacity>
                </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
          )
      }
      
      renderItem(doc, key) {
      
        return (
          <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        )
      
      
        let tmb = doc.pdf.thumbnails[0];
        let height = 190;
        let width = height * tmb.width / tmb.height;
        return (
          <View style={styles.item} key={key}>
                  <TouchableOpacity onPress={() => Module.openDocument(doc)}>
                      <Image source={{uri:tmb.path}} style={[{width:width,height:height}, styles.thumb]} resizeMode="cover" />
                      { doc.name === undefined || <Text style={styles.name}>{doc.name}</Text> }
                      { doc.description === undefined || <Text style={styles.description}>{doc.description}</Text> }
                  </TouchableOpacity>
              </View>
        )
      }
      
  }
  
  let styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
      container: {
          flex: 1,
          backgroundColor: Theme.contentBackgroundColor
      },
      item: {
        padding: 15
      },
      thumb: {
          marginBottom: 10,
          borderWidth: 1,
          borderColor: Theme.contentBorderColor
      },
      name: {
        fontSize: Theme.textSizeNormal,
        fontWeight: '500',
        marginBottom: 5
      },
      description: {
        fontSize: Theme.textSizeSmall,
        color: '#999'
      }
  })
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
        return (
			<ScrollView style={styles.container}>
				{ this.state.documents && this.state.documents.map((doc, i) => {
				    return this.renderItem(doc, i);
}) }
</ScrollView>
		)
}
	
	renderItem(doc, key) {
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
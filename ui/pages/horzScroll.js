export default class SmallerDocumentsPage extends Component {

    state = {
        documents: []
    }

    thumbWidth = Layout.window.width * 0.70
    thumbPadding = 20
    thumbExtra = Layout.window.width - this.thumbWidth - this.thumbPadding * 2

    moduleDidUpdate({ documents }) {
        this.setState({ documents });
    }

    render() {
        return (
            <ScrollView
                horizontal
                pagingEnabled={false}
                showsHorizontalScrollIndicator={false}
                snapToInterval={this.thumbWidth + this.thumbPadding * 2}
                decelerationRate={0.50}
                snapToAlignment={"start"}
                style={styles.container}>
                {this.state.documents.map((doc, i) => {
                    return this.renderItem(doc, i);
                })}
                <View style={{ width: this.thumbExtra }} />
            </ScrollView>
        )
    }

    renderItem(doc, key) {
        let tmb = doc.pdf.thumbnails[0]
        let width = this.thumbWidth
        let height = width * tmb.height / tmb.width
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={[styles.item, { width, margin: this.thumbPadding, paddingTop: 40, marginTop: 0, marginBottom: 0 }]}
                key={key}>
                <TouchableOpacity onPress={() => this.view(doc)} activeOpacity={0.8}>
                    <Image
                        source={{ uri: tmb.path }}
                        style={[{ width: width, height: height }, styles.thumb]}
                        resizeMode="cover" />
                    <View style={{ padding: 5 }}>
                        {doc.name === undefined || <Title bolder style={{ marginBottom: 5 }}>{doc.name}</Title>}
                        {doc.description === undefined || <Text style={{ marginBottom: 5 }}>{doc.description}</Text>}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={.5}
                    onPress={() => this.view(doc)}>
                    <Text active bolder centered>View</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }

    view(doc) {
        Module.openDocument(doc)
    }

}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.contentBackgroundColor
    },
    item: {
    },
    thumb: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: Theme.contentBorderColor,
        shadowColor: '#000000',
        shadowOffset: {
            width: 30,
            height: 30
        },
        shadowRadius: 5,
        shadowOpacity: 1
    },
    button: {
        width: 80,
        marginTop: 5,
        marginBottom: 30,
        paddingTop: 4,
        paddingBottom: 4,
        marginLeft: 0,
        marginRight: 0,
        backgroundColor: 'transparent',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Theme.contentTintColor
    }
})
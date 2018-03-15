export default class ViewPage extends Component {

    render() {
        const doc = this.props.args
        if (!doc) {
            return (
                <View style={styles.unavailableView}>
                    <Text style={styles.unavailableText}>The document is not currently available</Text>
                </View>
            )
        }

        return (
            <PdfView source={{ uri: doc.pdf.path }} style={styles.pdf} />
        )
    }
}

let styles = StyleSheet.create({
    pdf: {
        flex: 1
    },
    unavailableView: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
})

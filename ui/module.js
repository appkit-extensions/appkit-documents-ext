// main module class
export default class Main extends Module {

    constructor() {
      super();
        this.state = {
            documents: []
        }
    }

    async moduleWillLoad() {

        // process document pdfs
        if (this.data.documents) {
            for (var i=0; i<this.data.documents.length; i++) {
                this.data.documents[i].pdf = await Pdf.load(this.data.documents[i].pdf);
            }
  		
            // add to module state
            this.setState({documents: this.data.documents});
        }
    }

    openDocument(doc) {
        DocViewer.open(doc.pdf.path);
    }

}
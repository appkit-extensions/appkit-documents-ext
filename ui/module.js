﻿export default class DocumentsModule extends Module {

    state = {
        documents: []
    }

    moduleDataWillUpdate() {
        return this.loadModuleContent()
    }

    moduleDataDidUpdate(data) {
        this.setState({ documents: data && data.documents || [] })
    }

    getInitialPageId() {
        return 'horzScroll';
    }

    openDocument(doc) {
        this.pages.popup("view", doc)
    }

    findDocument(name) {
        return this.state.documents.find(d => d.name === name);
    }

}
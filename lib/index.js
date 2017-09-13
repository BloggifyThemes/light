const path = require("path")

exports.init = conf => {
    conf.templates.forEach(c => {
        const tmpl = Bloggify.renderer.registerTemplate(path.resolve(__dirname, "..", c))
        tmpl.data = { theme: conf.options }
    })
}

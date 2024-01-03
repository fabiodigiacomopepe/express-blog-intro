const posts = require("../db/posts.json");

function index(req, res) {
    res.format({
        "html": () => {
            const html = [];

            html.push("<h1>Lista dei post</h1>");

            html.push("<ul>");

            for (const post of posts) {
                const tagsHtml = post.tags.map(tag => `<span>${tag}</span>`).join(', ');

                html.push(`
                <li>
                    <h3>${post.title}</h3>
                    <img src="/imgs/${post.image}" alt="${post.title}" style="width: 100px">
                    <p>${post.content}</p>
                    <p>${tagsHtml}</p>
                </li>
                `);
            }

            html.push("</ul>");

            res.send(html.join(""));
        },
        "json": () => {
            res.type("json").send({
                totalElements: posts.length,
                list: posts
            });
        },
        "default": () => {
            res.status(406).send("Not Accettabile");
        }
    })
}

module.exports = {
    index
}
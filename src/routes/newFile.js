const { router } = require("./api");
router.get('/', (req, res) => {
    res.send('From API Route');
});

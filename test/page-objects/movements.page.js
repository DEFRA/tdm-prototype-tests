// movements.page.js
import { Page } from '~/test/page-objects/page.js'

class MovementsPage extends Page {

    get movementsLink() {
        return $('aria/Movements');
    }


}

module.exports = new MovementsPage();

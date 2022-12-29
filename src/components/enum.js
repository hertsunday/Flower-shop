import * as menuConstansts from "./menuConstants";
import * as sectionConstansts from "./sectionConstants";
import {CONIFERS_ON_THE_STEM, FIR, JUNIPER, LARCH, PINE, SPRUCE, WHITE_CEDAR, YEW} from "./sectionConstants";

export const catalogLabelEnum = {
    [menuConstansts.FLOWER_BULBS]: 'Цибулини квітів',
    [menuConstansts.SEEDLINGS_OF_PERENNIALS]: 'Саджанці багаторічників',
    [menuConstansts.FRUIT_SEEDLINGS]: 'Саджанці плодових',
    [menuConstansts.TREE_SEEDLINGS]: 'Саджанці дерев',
    [menuConstansts.SEEDLINGS_OF_CONIFEROUS_PLANTS]: 'Саджанці хвойних рослин',
    [menuConstansts.SEEDLINGS_OF_BUSHES]: 'Саджанці кущів',
    [menuConstansts.ROSE_SEEDLINGS]: 'Саджанці троянд',
    [menuConstansts.GROUND_COVER_PLANTS]: 'Ґрунтопокривні рослини',
    [menuConstansts.HOUSEPLANTS]: 'Кімнатні рослини',
    [menuConstansts.SEED]: 'Насіння',
    [menuConstansts.GARDEN_EQUIPMENT]: 'Садовий інвентар',
    [menuConstansts.CHRISTMAS_DECORATIONS]: 'Новорічні прикраси'
}

export const subCatalogLabelEnum = {
    [sectionConstansts.TULIPS]: "Тюльпани",
    [sectionConstansts.DAFFODILS]: "Нарциси",
    [sectionConstansts.HYACINTHS]: "Гіацинти",
    [sectionConstansts.CROCUSES]: "Крокуси",
    [sectionConstansts.ALLIUM]: "Алліум",
    [sectionConstansts.LILIES]: "Лілії",
    [sectionConstansts.FRITILLARIA]: "Фрітіларія",
    [sectionConstansts.MUSCARI]: "Мускарі",
    [sectionConstansts.AMARYLLIS]: "Амариліс",
    [sectionConstansts.ANEMONES]: "Анемони",
    [sectionConstansts.BUTTERCUP]: "Лютики",
    [sectionConstansts.EREMURUS]: "Еремурус",
    [sectionConstansts.CAMASSIA]: "Камассія",
    [sectionConstansts.LATE_BLOOMER]: "Пізньоцвіт",
    [sectionConstansts.DUTCH_IRISES]: "Голландські іриси",
    [sectionConstansts.CHIONODOX]: "Хіонодокса",
    [sectionConstansts.SNOWDROP]: "Підсніжник",
    [sectionConstansts.SNOWFLAKES]: "Проліски",
    [sectionConstansts.PEONIES]: "Півонії",
    [sectionConstansts.HOSTAS]: "Хости",
    [sectionConstansts.PERENNIAL_IRISES]: "Багаторічні іриси",
    [sectionConstansts.DAYLILIES]: "Лілейники",
    [sectionConstansts.SELAGINELLA]: "Селагінела",
    [sectionConstansts.CORNFLOWER]: "Волошка",
    [sectionConstansts.BLACKBERRY]: "Ожина",
    [sectionConstansts.CRANBERRY]: "Журавлина",

    [sectionConstansts.COWBERRY]: "Брусниця",
    [sectionConstansts.HONEYBERRIES]: "Жимолость їстівна",
    [sectionConstansts.RASPBERRY]: "Малина",
    [sectionConstansts.HAZELNUT]: "Фундук",
    [sectionConstansts.GOOSEBERRY]: "Агрус",
    [sectionConstansts.CURRANT]: "Смородина",
    [sectionConstansts.GOJI_BERRIES]: "Ягоди Годжі",
    [sectionConstansts.GRAPE_SEEDLINGS]: "Саджанці винограду",

    [sectionConstansts.DWARF_TREES]: "Карликові дерева",
    [sectionConstansts.SEEDLINGS_OF_COLUMNAR]: "Саджанці колоновидних",
    [sectionConstansts.APPLE_SEEDLINGS]: "Саджанці яблуні",
    [sectionConstansts.MULBERRY]: "Шовковиця",
    [sectionConstansts.TURF]: "Дерен",
    [sectionConstansts.PEAR_SEEDLINGS]: "Саджанці груш",
    [sectionConstansts.CHERRY_SEEDLINGS]: "Саджанці вишні",
    [sectionConstansts.MERRY_SEEDLINGS]: "Саджанці черешні",
    [sectionConstansts.PEACH_SEEDLINGS]: "Саджанці персика",
    [sectionConstansts.PLUM_SEEDLINGS]: "Саджанці слив",
    [sectionConstansts.APRICOT_SEEDLINGS]: "Саджанці абрикосу",
    [sectionConstansts.NECTARINE]: "Нектарин",
    [sectionConstansts.ALMOND]: "Мигдаль",
    [sectionConstansts.WALNUT]: "Волоський горіх",

    [sectionConstansts.SPRUCE]: "Ялина",
    [sectionConstansts.CEDAR]: "Кедр",
    [sectionConstansts.CYPRESS]: "Кипарисовик",
    [sectionConstansts.JUNIPER]: "Ялівець",
    [sectionConstansts.FIR]: "Ялиця",
    [sectionConstansts.PINE]: "Сосна",
    [sectionConstansts.YEW]: "Тис",
    [sectionConstansts.WHITE_CEDAR]: "Туя",
    [sectionConstansts.LARCH]: "Модрина",
    [sectionConstansts.CONIFERS_ON_THE_STEM]: "Хвойні на штамбі"
}

export const catalogOrderEnum = {
    [menuConstansts.FLOWER_BULBS]: 1,
    [menuConstansts.SEEDLINGS_OF_PERENNIALS]: 2,
    [menuConstansts.FRUIT_SEEDLINGS]: 3,
    [menuConstansts.TREE_SEEDLINGS]: 4,
    [menuConstansts.SEEDLINGS_OF_CONIFEROUS_PLANTS]: 5,
    [menuConstansts.SEEDLINGS_OF_BUSHES]: 6,
    [menuConstansts.ROSE_SEEDLINGS]: 7,
    [menuConstansts.GROUND_COVER_PLANTS]: 8,
    [menuConstansts.HOUSEPLANTS]: 9,
    [menuConstansts.SEED]: 10,
    [menuConstansts.GARDEN_EQUIPMENT]: 11,
    [menuConstansts.CHRISTMAS_DECORATIONS]: 12
}

export const subCatalogEnum = {
    [menuConstansts.FLOWER_BULBS]: [
        sectionConstansts.TULIPS,
        sectionConstansts.DAFFODILS,
        sectionConstansts.HYACINTHS,
        sectionConstansts.CROCUSES,
        sectionConstansts.ALLIUM,
        sectionConstansts.LILIES,
        sectionConstansts.FRITILLARIA,
        sectionConstansts.MUSCARI,
        sectionConstansts.AMARYLLIS,
        sectionConstansts.ANEMONES,
        sectionConstansts.BUTTERCUP,
        sectionConstansts.EREMURUS,
        sectionConstansts.CAMASSIA,
        sectionConstansts.LATE_BLOOMER,
        sectionConstansts.DUTCH_IRISES,
        sectionConstansts.CHIONODOX,
        sectionConstansts.SNOWDROP,
        sectionConstansts.SNOWFLAKES],

    [menuConstansts.SEEDLINGS_OF_PERENNIALS]: [
        sectionConstansts.PEONIES,
        sectionConstansts.HOSTAS,
        sectionConstansts.PERENNIAL_IRISES,
        sectionConstansts.DAYLILIES,
        sectionConstansts.SELAGINELLA,
        sectionConstansts.CORNFLOWER],

    [menuConstansts.FRUIT_SEEDLINGS]: [
        sectionConstansts.BLACKBERRY,
        sectionConstansts.CRANBERRY,
        sectionConstansts.COWBERRY,
        sectionConstansts.HONEYBERRIES,
        sectionConstansts.RASPBERRY,
        sectionConstansts.HAZELNUT,
        sectionConstansts.GOOSEBERRY,
        sectionConstansts.CURRANT,
        sectionConstansts.GOJI_BERRIES,
        sectionConstansts.GRAPE_SEEDLINGS],

    [menuConstansts.TREE_SEEDLINGS]: [
        sectionConstansts.DWARF_TREES,
        sectionConstansts.SEEDLINGS_OF_COLUMNAR,
        sectionConstansts.APPLE_SEEDLINGS,
        sectionConstansts.MULBERRY,
        sectionConstansts.TURF,
        sectionConstansts.PEAR_SEEDLINGS,
        sectionConstansts.CHERRY_SEEDLINGS,
        sectionConstansts.MERRY_SEEDLINGS,
        sectionConstansts.PEACH_SEEDLINGS,
        sectionConstansts.PLUM_SEEDLINGS,
        sectionConstansts.APRICOT_SEEDLINGS,
        sectionConstansts.NECTARINE,
        sectionConstansts.ALMOND,
        sectionConstansts.WALNUT],

    [menuConstansts.SEEDLINGS_OF_CONIFEROUS_PLANTS]: [
        sectionConstansts.SPRUCE,
        sectionConstansts.CEDAR,
        sectionConstansts.CYPRESS,
        sectionConstansts.JUNIPER,
        sectionConstansts.FIR,
        sectionConstansts.PINE,
        sectionConstansts.YEW,
        sectionConstansts.WHITE_CEDAR,
        sectionConstansts.LARCH,
        sectionConstansts.CONIFERS_ON_THE_STEM],

    [menuConstansts.SEEDLINGS_OF_BUSHES]: [
        sectionConstansts.BLACKBERRY,
        sectionConstansts.CRANBERRY],

    [menuConstansts.ROSE_SEEDLINGS]: [
        sectionConstansts.BLACKBERRY,
        sectionConstansts.CRANBERRY],

    [menuConstansts.GROUND_COVER_PLANTS]: [
        sectionConstansts.BLACKBERRY,
        sectionConstansts.CRANBERRY],

    [menuConstansts.HOUSEPLANTS]: [
        sectionConstansts.BLACKBERRY,
        sectionConstansts.CRANBERRY],

    [menuConstansts.SEED]: [
        sectionConstansts.BLACKBERRY,
        sectionConstansts.CRANBERRY],

    [menuConstansts.GARDEN_EQUIPMENT]: [
        sectionConstansts.BLACKBERRY,
        sectionConstansts.CRANBERRY],

    [menuConstansts.CHRISTMAS_DECORATIONS]: [
        sectionConstansts.BLACKBERRY,
        sectionConstansts.CRANBERRY]

}

// export const catalog = Object.values(constanst).map(el => catalogEnum[el]);

/*export const handlers = {
    [menuConstansts.SEEDLINGS_OF_PERENNIALS]: () => window.location.href = "google",
}*/
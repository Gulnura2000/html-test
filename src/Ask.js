const Ask = [
    {
        ask_id: 1,
        ask: 'Что позволяет указать тег title?',
        answer_0: {
            radio: <input name = "answer" type = "radio"/>,
            text: 'заголовок web-страницы, котоый также будет отображаться в поисковиках',
            status: true
        },
        answer_1: {
            radio: <input name = "answer" type = "radio"/>,
            text: 'заголовок первого уровня',
            status: false

        },
        answer_2: {
            radio: <input name = "answer" type = "radio"/>,
            text: 'название таблицы',
            status: false
        },

        answer_3: {
            radio: <input name = "answer" type = "radio"/>,
            text: 'название маркированного списка',
            status: false
        }
    },
    {
        ask_id: 2,
        ask: "С помощью какого тега в HTML создаются ссылки?",
        answer_0: {
            radio: <input name = "answer2" type = "radio"/>,
            text: '<b/>',
            status: false
        },
        answer_1: {
            radio: <input name = "answer2" type = "radio"/>,
            text: "<br/>",
            status: false


        },
        answer_2: {
            radio: <input name = "answer2" type = "radio"/>,
            text: "<strong/>",
            status: false
        },
        answer_3: {
            radio: <input name = "answer2" type = "radio"/>,
            text: "<a/>",
            status: true
        }
        
    },
    {
        ask_id: 3,
        ask: "Как оформляется комментарий в HTML?",
        answer_0: {
            radio: <input name = "answer2" type = "radio"/>,
            text: '/* комментарий */',
            status: false
        },
        answer_1: {
            radio: <input name = "answer2" type = "radio"/>,
            text: "<!—комментарий -->",
            status: true


        },
        answer_2: {
            radio: <input name = "answer2" type = "radio"/>,
            text: "// комментарий",
            status: false
        },
        answer_3: {
            radio: <input name = "answer2" type = "radio"/>,
            text: "< комментарий />",
            status: false
        }
        
        
    },

    {
        ask_id: 4,
        ask: "С помощью какого тега в таблицах создаются строки?",
        answer_0: {
            radio: <input name = "answer2" type = "radio"/>,
            text: '<td>',
            status: false
        },
        answer_1: {
            radio: <input name = "answer2" type = "radio"/>,
            text: " <th>",
            status: false


        },
        answer_2: {
            radio: <input name = "answer2" type = "radio"/>,
            text: " <tr>",
            status: true
        },
       answer_3: {
        radio: <input name = "answer2" type = "radio"/>,
            text: " <table>",
            status: true
       }
        
    },
    {
        ask_id: 5,
        ask: "Как выделить текст курсивом?",
        answer_0: {
            radio: <input name = "answer2" type = "radio"/>,
            text: ' <hr>курсив</hr>',
            status: false
        },
        answer_1: {
            radio: <input name = "answer2" type = "radio"/>,
            text: " <b>курсив</b>",
            status: true


        },
        answer_2: {
            radio: <input name = "answer2" type = "radio"/>,
            text: " <c>курсив</c>",
            status: false
        },
        answer_3: {
            radio: <input name = "answer2" type = "radio"/>,
            text: " <em>курсив</em>",
            status: true
        }
       
        
    },
    {
        ask_id: 6,
        ask: " Каких тегов в HTML не существует?",
        answer_0: {
            radio: <input name = "answer2" type = "radio"/>,
            text: 'Парных',
            status: false
        },
        answer_1: {
            radio: <input name = "answer2" type = "radio"/>,
            text: "Одиночных",
            status: false


        },
        answer_2: {
            radio: <input name = "answer2" type = "radio"/>,
            text: " Тройных",
            status: true
        },
        answer_3: {
            radio: <input name = "answer2" type = "radio"/>,
            text: "не парных",
            status: true
        },
        
    },
]

export default Ask
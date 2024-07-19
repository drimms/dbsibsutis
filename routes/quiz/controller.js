const models = require('../../models')


async function loader(data, strr, course, lab){
    let countQuestion = 0;

    const questId = models.QuestionsCourse.build({
      nam: course,
      idla: lab
    })
    await questId.save();

    for (i=0; i<strr; i++) {
        currentstr = data.split('\n')[i]; //строка для поиска
        if (!currentstr.indexOf('тест')) {
          countQuestion=countQuestion+1; 
          let titleQuestion = data.split('\n')[i+1]; //записать название вопроса в базу  
          start = i + 3;
          // эта конструкция всегда будет знать сколько вопросов и  ответов
          let arr = [];
          let key = [];
          for (let j=0; j<4; j++) {
            let ans = data.split('\n')[start+j];
            if (ans.match('=')) {
              arr.push(ans.substring(3));
              key.push(1);
            }
            else {
              arr.push(ans.substring(2));
              key.push(0);
            }
          }
          let quest = models.Questions.build({
            QuestionsCourseId: questId.id,
            name: course,
            idlabs: lab,
            typequest: true,
            titleAnswer: titleQuestion,
            oneans: arr[0],
            oneansTrue: key[0],
            twoans: arr[1],
            twoansTrue: key[1],
            threeans: arr[2],
            threeansTrue: key[2],
            fouranswer: arr[3],
            fouranswerTrue: key[3]
          })
          await quest.save()
        }
        if (!currentstr.indexOf('вопрос')) {
          let titleQuestion = data.split('\n')[i+1] //записать название открытого вопроса в базу
          let openans = data.split('\n')[start+4]
          let quest = models.Questions.build({
            QuestionsCourseId: questId.id,
            name: course,
            idlabs: lab,
            typequest: false,
            titleAnswer: titleQuestion,
            oneans: openans,
            oneansTrue: 1,
            twoans: '',
            twoansTrue: 0,
            threeans: '',
            threeansTrue: 0,
            fouranswer: '',
            fouranswerTrue: 0,
            authorId: questId.id
          })
          await quest.save()
        } 
    }
}

module.exports = {loader};
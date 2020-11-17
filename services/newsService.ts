import NewsRepository from '../repository/newsRepository';

class newsService {

    async search(term, page, perPage) {
        let result = await NewsRepository.find({ 'title': new RegExp('.*' + term + '*', 'i') })
            .skip((page - 1) * perPage)
            .limit(perPage);
        return result;
    }

    async get() {
        let result = await NewsRepository.find({ 'active': true }, 'title hat img').sort({ publishDate: -1 }).limit(2);
        return result;
    }

    async getById(_id) {
        let result = await NewsRepository.findById(_id);
        return result;
    }

    async create(news) {
        let result = await NewsRepository.create(news);
        return result;
    }

    async update(_id, news) {
        let result = await NewsRepository.findByIdAndUpdate(_id, news);
        return result;
    }

    async delete(_id) {
        let result = await NewsRepository.findByIdAndRemove(_id);
        return result;
    }
}

export default new newsService();
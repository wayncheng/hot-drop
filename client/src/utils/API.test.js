import API from './API';
import { expect } from 'chai';

describe('API',function(){
	it('should fetch all markers for specified path ID', async function(){
		await API.getMarkersByPathId(24)
			.then(response => {
				const markers = response.data;
				const sample = markers[0];
				console.log('sample:',sample);
				console.log('markers.length:',markers.length);

				expect(markers).to.be.an.instanceof(Array)
				expect(markers.length).to.be.below(0);
				expect(sample).to.be.an('object');
				expect(sample.id).to.be.a('number');
				expect(sample.x).to.be.a('number');
				expect(sample.y).to.be.a('number');
				expect(sample.path_id).to.be.a('number');
				expect(sample.uuid).to.be.a('string');
				expect(sample.time).to.be.a('string');
			})
	})
})
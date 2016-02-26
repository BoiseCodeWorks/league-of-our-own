app.factory('Models', function (DS) {
	var Models = {
		sport: Sport(),
		room: Room()
	}

	return Models;


	function Sport() {
		return DS.defineResource({
			name: 'sport',
			endpoint: 'sports',
			relations: {
				hasMany: {
					rooms: {
						localField: 'rooms',
						foreignKey: 'roomId'
					}
				}
			}
		})
	}

	function Room() {
		return DS.defineResource({
			name: 'room',
			endpoint: 'rooms',
			relations: {
				belongsTo: {
					sport: {
						localField: 'sport',
						foreignKey: 'sportId'
					}
				}
			}
		})
	}



})
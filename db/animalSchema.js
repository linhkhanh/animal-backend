const schema = {
	validator: {
		$jsonSchema: {
			properties: {
				name: {
                    type: "string"
                },
                species: {
                    type: "string"
                },
                breed: {
                    type: "string"
                },
                sex: {
                    type: "string"
                },
                image: {
                    type: "string"
                },
                age: {
                    type: "number"
                },
                adopted: {
                    type: "boolean"
                }
			},
			required: [
				
			]
		}
	}
}

module.exports = schema
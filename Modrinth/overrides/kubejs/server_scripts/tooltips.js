ItemEvents.modifyTooltips(event => {
	event.modify("rechiseled:chisel", { shift: false }, text => {
		text.insert(1, Text.gray("Hold [SHIFT] for summary"))
	})
	event.modify("rechiseled:chisel", { shift: true }, text => {
		text.add([
			Text.gray("A highly versatile tool for"),
			Text.gray("creating block variants."),
			Text.gray("Right click a compatible block or"),
			Text.gray("open the GUI by right clicking in the air to use.")
		])
	})
})
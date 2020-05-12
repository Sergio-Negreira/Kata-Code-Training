const ticker = (text,width,tick) => {
    const space = ' '.repeat(width)
    const setText = space+text+space
    tick = tick%(setText.length-width)
    return setText.substring(tick, tick+width)
}
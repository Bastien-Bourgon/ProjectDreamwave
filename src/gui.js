function createButton(width,height,text,text_color,background,UItexture)
{
    var button = BABYLON.GUI.Button.CreateSimpleButton("but", text);
    button.width = width+"px";
    button.height = height+"px";
    button.color = text_color;
    button.background = background;
    button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP
    UItexture.addControl(button);
    return button
}

function createTextBlock(text,color,font_size,UItexture,top,name)
{
    var text1 = new BABYLON.GUI.TextBlock(name);
    text1.text = text;
    text1.color = color;
    text1.fontSize = font_size;
    if (top != undefined)
    {
        text1.top = top
    }
    UItexture.addControl(text1);  
    return text1
}

function createRectangleContainer(width,height,cornerRadius,color,border_thickness,background,UItexture,top,name)
{
    var rect1 = new BABYLON.GUI.Rectangle(name);
    rect1.width = width+"px";
    rect1.height = height+"px";
    rect1.cornerRadius = cornerRadius;
    rect1.color = color;
    rect1.thickness = border_thickness;
    rect1.background = background;
    if (top != undefined)
    {
        rect1.top = top
    }
    UItexture.addControl(rect1);
    return rect1
}

function createDialogueBox(width,height,cornerRadius,color,border_thickness,background,UItexture,text_color,offset)
{
    var main_box = createRectangleContainer(width,height,cornerRadius,color,border_thickness,background,UItexture,offset,"DialogueBox");
    var dialogue_text = createTextBlock("",text_color,24,UItexture,offset,"DialogueText")
    var speaker_box = createRectangleContainer(400,50,cornerRadius,color,border_thickness,background,UItexture,offset-100,"SpeakerBox");
    var dialogue_speaker = createTextBlock("",text_color,24,UItexture,offset-100,"Speaker")
}
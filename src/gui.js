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
var MAX_FORMVALUE = 10;
var errMessage;
var formValue = new Array(2);
for (i = 0; i < 2; i++)
{
	formValue[i] = new Array(MAX_FORMVALUE);
}

function RecvForm()
{
	tmp = document.URL.split("?");
	
	//が渡されていないか
	if (tmp.length == 1)
	{
		return true;
	}
	
	tmp = tmp[1].split("&");
	
	//フォーム変数上限を超えているか
	if (tmp.length > MAX_FORMVALUE)
	{
		errMessage = "VARIABLE COUNT OVER";
		return false;
	}
	
	//フォーム変数ループ
	for (i = 0; i < tmp.length; i++)
	{
		pair = tmp[i].split("=");
		formValue[0][i] = pair[0];
		formValue[1][i] = unescape(pair[1]);
	}
}

function GetFormValue(variableName)
{
	//フォーム変数名探索ループ
	for (i = 0; i < MAX_FORMVALUE; i++)
	{
		//グローバルと一致するか
		if (variableName == formValue[0][i])
		{
			return formValue[1][i];
		}
	}
	
	return null;
}

function SetValue(variableName, disp)
{
	eleVariableName = document.getElementById(variableName);
	tmp = GetFormValue(eleVariableName.value);
	
	//フォーム変数がないか
	if (tmp == null)
	{
		alert("NOT DEFINED");
		return;
	}
	
	eleDisp = document.getElementById(disp);
	eleDisp.value = tmp;
}

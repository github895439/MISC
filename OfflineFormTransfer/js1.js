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
	
	//���n����Ă��Ȃ���
	if (tmp.length == 1)
	{
		return true;
	}
	
	tmp = tmp[1].split("&");
	
	//�t�H�[���ϐ�����𒴂��Ă��邩
	if (tmp.length > MAX_FORMVALUE)
	{
		errMessage = "VARIABLE COUNT OVER";
		return false;
	}
	
	//�t�H�[���ϐ����[�v
	for (i = 0; i < tmp.length; i++)
	{
		pair = tmp[i].split("=");
		formValue[0][i] = pair[0];
		formValue[1][i] = unescape(pair[1]);
	}
}

function GetFormValue(variableName)
{
	//�t�H�[���ϐ����T�����[�v
	for (i = 0; i < MAX_FORMVALUE; i++)
	{
		//�O���[�o���ƈ�v���邩
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
	
	//�t�H�[���ϐ����Ȃ���
	if (tmp == null)
	{
		alert("NOT DEFINED");
		return;
	}
	
	eleDisp = document.getElementById(disp);
	eleDisp.value = tmp;
}

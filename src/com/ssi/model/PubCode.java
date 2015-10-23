package com.ssi.model;


/**
 * 字典
 * @author Administrator
 *
 */
public class PubCode extends BaseDto  {

    /**
     * 
     */
    private static final long serialVersionUID = 8746726742908023340L;

    private int id;
    
    private String codeKey;
    
    private String codeValue ;

    public PubCode(String codeKey, String codeValue) {
        super();
        this.codeKey = codeKey;
        this.codeValue = codeValue;
    }
    
    public PubCode(int id, String codeKey, String codeValue) {
        super();
        this.id = id;
        this.codeKey = codeKey;
        this.codeValue = codeValue;
    }



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCodeKey() {
        return codeKey;
    }

    public void setCodeKey(String codeKey) {
        this.codeKey = codeKey;
    }

    public String getCodeValue() {
        return codeValue;
    }

    public void setCodeValue(String codeValue) {
        this.codeValue = codeValue;
    }
    
}

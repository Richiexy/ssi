//====================================================================
//class Hashtable
Hashtable = function ()
{
    this.hash = new Array();
    
    Hashtable.prototype.Clear = function()
    {
        this.hash = new Array();
    }              

    Hashtable.prototype.ContainsKey = function(key)
    {
        var exists = false;
        if (this.hash[key] != null)
        {  
          exists = true;
        }
        return exists;
    }

    Hashtable.prototype.ContainsValue = function(value)
    {
        var contains = false;
        if (value != null) 
        {
            for (var i in this.hash) 
            {
                if (this.hash[i] == value) 
                {
                    contains = true;
                    break;
                }
            }
        }        
        return contains;
    }
    
    Hashtable.prototype.Get = function(key)
    {
        return this.hash[key];
    }

    Hashtable.prototype.IsEmpty = function()
    {
        return (parseInt(this.size()) == 0) ? true : false;
    }
    
    Hashtable.prototype.GetKeys = function()
    {
        var keys = new Array();
        for (var i in this.hash) 
        {
            if (this.hash[i] != null)
                keys.push(i);
        }
        return keys;
    }

    Hashtable.prototype.Put = function(key, value)
    {
        if (key == null || value == null) 
        {
            return;
        }   
        else
        {
            this.hash[key] = value;
        }
    }
    
    Hashtable.prototype.Remove = function(key)
    {
        var rtn = this.hash[key];
        this.hash[key] = null;
        return rtn;
    }    
    
    Hashtable.prototype.GetSize = function()
    {
        var size = 0;
        for (var i in this.hash) 
        {
            if (this.hash[i] != null)
            {
                size ++;
            }
        }
        return size;
    }
    
    Hashtable.prototype.ToString = function()
    {
        var result = "";
        for (var i in this.hash)
        {        
            if (this.hash[i] != null)
                result += "{" + i + "},{" + this.hash[i] + "}/n";  
        }
        return result;
    }
                                      
    Hashtable.prototype.GetValues = function()
    {
        var values = new Array();
        for (var i in this.hash) 
        {
            if (this.hash[i] != null)
                values.push(this.hash[i]);
        }
        return values;
    }
                                      
    Hashtable.prototype.EntrySet = function()
    {
        return this.hash;
    }
}

//====================================================================
//class Queue
Queue = function()
{
    this.queue = [];
    this.queueSpace = 0;

  Queue.prototype.GetSize = function()
  {
    return this.queue.length - this.queueSpace;
  }
  
  Queue.prototype.IsEmpty = function()
  {  
      return (this.queue.length == 0);
  }

  Queue.prototype.Enqueue = function(element)
  {
      this.queue.push(element);
  }

  Queue.prototype.Dequeue = function()
  {
    var element = undefined;
    
    if (this.queue.length)
    {
      element = this.queue[this.queueSpace];

      if (++this.queueSpace * 2 >= this.queue.length)
      {
        this.queue = this.queue.slice(this.queueSpace);
        this.queueSpace=0;
      }
    }
    
    return element;
  }
  
  Queue.prototype.GetOldestElement = function()
  {
    var element = undefined;
    if (this.queue.length) 
    {
        element = this.queue[this.queueSpace];
    }
    return element;
  }
}

//====================================================================
//class ArrayList
ArrayList = function () 
{   
    this.elems = [];
    this.elementCount = 0;
     
    ArrayList.prototype.GetSize = function () 
    {
         return this.elementCount;
    }
     
    ArrayList.prototype.Add = function (element) 
    {
         this.EnsureCapacity(this.elementCount + 1);
         this.elems[this.elementCount++] = element;
         return true;
    }
     
    ArrayList.prototype.AddElementAt = function (index, element) 
    {
         if (index > this.elementCount || index < 0) 
         {
             return;
         }
         this.EnsureCapacity(this.elementCount + 1);
         for (var i = this.elementCount + 1; i > index; i--) 
         {
             this.elems[i] = this.elems[i - 1];
         }
         this.elems[index] = element;
         this.elementCount++;
    }
     
    ArrayList.prototype.SetElementAt = function (index, element) 
    {
         if (index > this.elementCount || index < 0) 
         {
             return;
         }
         this.elems[index] = element;
    }
     
    ArrayList.prototype.ToString = function () 
    {
        var str = "";
        for (var i = 0; i < this.elementCount; i++) 
        {
            if (i > 0) 
            {
                str += "|";
            }
            str += this.elems[i];
        }
        str += "";
        return str;
    }
    
    ArrayList.prototype.Get = function (index) 
    {
        if (index >= this.elementCount) 
        {
            return;
        }
        return this.elems[index];
    }
    
    ArrayList.prototype.Remove = function (index) 
    {
        if (index >= this.elementCount) 
        {
            return null;
        }
        var oldData = this.elems[index];
        for (var i = index; i < this.elementCount - 1; i++) 
        {
            this.elems[i] = this.elems[i + 1];
        }
        this.elems[this.elementCount - 1] = null;
        this.elementCount--;
        return oldData;
    }
    
    ArrayList.prototype.IsEmpty = function () 
    {
        return elementCount == 0;
    }
    
    ArrayList.prototype.IndexOf = function (elem) 
    {
        for (var i = 0; i < this.elementCount; i++) 
        {
            if (this.elems[i] == elem) 
            {
                return i;
            }
        }
        return -1;
    }
    
    ArrayList.prototype.LastIndexOf = function (elem) 
    {
        for (var i = this.elementCount - 1; i >= 0; i--) 
        {
            if (this.elems[i] == elem) 
            {
                return i;
            }
        }
        return -1;
    }
    
    ArrayList.prototype.Contains = function (elem) 
    {
        return this.IndexOf(elem) >= 0;
    }
    
    ArrayList.prototype.EnsureCapacity = function (minCapacity)
    {
        var oldCapacity = this.elems.length;
        if (minCapacity > oldCapacity) 
        {
            var oldData = this.elems;
            var newCapacity = parseInt((oldCapacity * 3) / 2 + 1);
            if (newCapacity < minCapacity) 
            {
                newCapacity = minCapacity;
            }
            this.elems = new Array(newCapacity);
            for (var i = 0; i < oldCapacity; i++) 
            {
                this.elems[i] = oldData[i];
            }
        }
    }
}